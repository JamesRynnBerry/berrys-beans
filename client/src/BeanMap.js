import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';


const containerStyle = {
    width: '40.5rem',
    height: '22.5rem',
    borderRadius: '1.5rem',
    border: "solid 1px yellow"
};

const center = {
    lat: 40.7128,
    lng: -74.0060
};

function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
    zoomControlOptions: {
        position: maps.ControlPosition.center,
        style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
    };
}

function BeanMap(){



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCZu8uJllCsdilEX7yOTjWPgazu50efNMY"
        })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {

        function addMarker(beanMarkerObject){
            var basicMarker = new window.google.maps.Marker({
            position:{lat:beanMarkerObject.latitude,lng:beanMarkerObject.longitude},
            map:map,
            icon:beanMarkerObject.iconImage,
            content:beanMarkerObject.name,
            content:beanMarkerObject.address,
            });
            if(beanMarkerObject.name){
                var infoWindow = new window.google.maps.InfoWindow({
                    content:beanMarkerObject.name,
                });

                basicMarker.addListener('click', function() {
                    infoWindow.open(map, basicMarker)
                });
                // infoWindow.addListener('closeclick', function() {
                //     infoWindow.close(map, basicMarker)
                // });

            };

          
        }

        // const contentString = 
        // <div id = "content">
        // <div id = "siteNotice">
        // </div>
        // <h1 id="firstHeading" class="firstHeading>Porto Rico Importing Co."></h1>
        // <div id="bodyContent">
        // <p><b>Porto Rico Importing Co.</b> located at 201 Bleecker St, New York, NY 10012</p>
        // </div>
        // </div>;

        // const infowindow = new window.google.maps.InfoWindow({
        //     content: contentString,
        // });

        // const marker = new window.google.maps.Marker({
        //     position:{lat:40.718257042573775, lng:-73.9881713750316},
        //     map,
        //     title: "Porto Rico Importing Co."
        // })

        // marker.addListener("click", () => {
        //     infowindow.open({
        //         anchor:marker,
        //         map,
        //         shouldFocus: false,
        //     })
        // });

        

        // const marker = new window.google.maps.Marker({
        //     position:{lat:40.72849314019794,lng: -73.98741403025014},
        //     icon: "http://placekitten.com/50/50",
        //     map: map,
        // })
    
        const beanMarkerObjects = [
            {
                name: "Porto Rico Importing Co.",
                latitude: 40.718257042573775,
                longitude: -73.9881713750316,
                address: "201 Bleecker St, New York, NY 10012"
            },
            {
                name: "Porto Rico Importing Co.",
                latitude: 40.72825256465811,
                longitude: -73.98737234837931
            },
            {
                name: "Porto Rico Importing Co.",
                latitude: 40.72934307265706,
                longitude: -74.00137551232535
            }
        ]

        for(var i = 0; i < beanMarkerObjects.length;i++){
            addMarker(beanMarkerObjects[i]);
        }


        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])




        // const data = React.useMemo(() => {
        //     return [
        //         new window.google.maps.LatLng(40.718257042573775, -73.9881713750316),
        //         new window.google.maps.LatLng(40.72825256465811, -73.98737234837931),
        //         new window.google.maps.LatLng(40.72934307265706, 40.72934307265706)
        //     ]
        // }, [])



    return isLoaded ? (
        <div>
            <GoogleMap
            className = "BeanMap"
            options={createMapOptions}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
                {/* {beanMarkerObjects.map(beanMarkerObject => (
                    <Marker 
            onCLick={() => {
                setSelectedStore(beanMarkerObject.name);
            }}
            />
                ))}

            {selectedStore && (
                <InfoWindow >
                    <div>

                    </div>
                <InfoWindow/>
            )} */}
            
            <></>
            </GoogleMap >
        </div>
        )  : <></>
}


export default React.memo(BeanMap)
