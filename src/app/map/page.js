// MapDisplay.js
"use client";
import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import { Box, Select } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Loader from "../../Components/LOader"

const MapDisplay = () => {

  const [map, setMap] = useState(null);
  const [activeSites, setActiveSites] = useState([]);
  const [filter, setFilter] = useState('');
  const [mapKey, setMapKey] = useState(1);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [allProject, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({ name: 'All Project', _id: '' });
  const [coordinates, setCoordinates] = useState([]);
  const [centroid, setCentroid] = useState(0)
  const [initialZoom, setZoom] = useState(0)
  const [resetMap, setResetMap] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (resetMap) {
      setResetMap(false);
    }
  }, [resetMap]);

  useEffect(() => {
    setShow(false);
    setShow(true);
    console.log("cooords", coordinates);
  }, [centroid])

  const handleProjectChange = (value) => {
    const selectedProjectData = filteredProjects.find(
      (project) => project.ProjectName === value
    );

    setSelectedProject({
      name: value,
      _id: selectedProjectData ? selectedProjectData._id : '',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSitesAndProject();
    };

    fetchData();
  }, [selectedProject]);

  useEffect(() => {
    let cords = activeSites.map((item) => ({
      lat: item.latitude,
      lng: item.longitude,
      projectID: item.projectID,
      pumpName: item.pumpName,
    }));
    setCoordinates(cords);
  }, [activeSites]);

  useEffect(() => {
    calculateCentroid();
    calculateZoomLevel();
  }, [coordinates, activeSites]);

  const getSitesByProjectId = async () => {
    try {
      const body = { projectID: selectedProject._id };
      const data = await axios.post('/api/sites/getSitesByProjectId', body);
      setActiveSites(data.data.sites);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getSitesAndProject = async () => {
    try {
      setMapKey((prevKey) => prevKey + 1);
      await Promise.all([getProjects(), getSitesByProjectId()]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getProjects = async () => {
    const projectsResponse = await axios.get('/api/project/getAllProjects');
    setProjects(projectsResponse.data.projects);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC_mmyHAnkTF9dUjcTngzxG9eHfS3oMbfM',
  });

  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const handleMarkerHover = (index) => {
    setHoveredMarker(index);
  };

  const handleMarkerLeave = () => {
    setHoveredMarker(null);
  };

  const calculateCentroid = () => {
    let latitude = 0;
    let longitude = 0;
    let n = coordinates.length;

    for (let i = 0; i < n; i++) {
      latitude += parseFloat(coordinates[i].lat);
      longitude += parseFloat(coordinates[i].lng);
    }
    const ans = { lat: latitude / n, lng: longitude / n }
    console.log("xxx old", ans)
    setCentroid(ans)
  }

  const calculateZoomLevel = () => {
    const WORLD_WIDTH = 256;
    const PADDING_FACTOR = 3.5;

    if (coordinates.length === 0) {
      return 0;
    }
    if (coordinates.length === 1) {
      return 10;
    }

    let minLat = Number.MAX_VALUE;
    let maxLat = Number.MIN_VALUE;
    let minLng = Number.MAX_VALUE;
    let maxLng = Number.MIN_VALUE;

    for (let i = 0; i < coordinates.length; i++) {
      const site = coordinates[i];
      minLat = Math.min(minLat, parseFloat(site.lat));
      maxLat = Math.max(maxLat, parseFloat(site.lat));
      minLng = Math.min(minLng, parseFloat(site.lng));
      maxLng = Math.max(maxLng, parseFloat(site.lng));
    }

    const latDiff = maxLat - minLat;
    const lngDiff = maxLng - minLng;
    const zoomLat = Math.log2((WORLD_WIDTH * PADDING_FACTOR) / lngDiff);
    const zoomLng = Math.log2((WORLD_WIDTH * PADDING_FACTOR) / latDiff);
    const zoom = Math.floor(Math.min(zoomLat, zoomLng));

    setZoom(zoom)
  };

  const filteredProjects = [
    { ProjectName: 'All Project', _id: '' },
    ...allProject.filter((project) =>
      project.ProjectName.toLowerCase().includes(filter.toLowerCase())
    ),
  ];

  useEffect(() => {
    calculateCentroid()
    calculateZoomLevel()
  }, [coordinates])


  return (
    <div>
      {isLoaded && (
        <Box>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={centroid}
            zoom={initialZoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Box position={'absolute'} right={'14'} top={'2'}>
              <Select
                variant={'filled'}
                width={300}
                value={selectedProject.name}
                onChange={(e) => handleProjectChange(e.target.value)}
              >
                {filteredProjects.map((project) => (
                  <option key={project._id} value={project.ProjectName}>
                    {project.ProjectName}
                  </option>
                ))}
              </Select>
            </Box>
            {coordinates.length > 0 &&
              coordinates.map((coord, index) => (
                <Marker
                  key={index}
                  position={{ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }}
                  onMouseOver={() => handleMarkerHover(index)}
                  onMouseOut={handleMarkerLeave}
                >
                  {hoveredMarker === index && (
                    <InfoWindow position={{ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }} onCloseClick={handleMarkerLeave}>
                      <div>{coord.pumpName}</div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
          </GoogleMap>
        </Box>
      )}
      {!isLoaded && <Loader/>}
    </div>
  );
};

export default MapDisplay ; 
