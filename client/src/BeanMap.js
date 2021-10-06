import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 40.7128,
    lng: -74.0060
};

function BeanMap(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCZu8uJllCsdilEX7yOTjWPgazu50efNMY"
        })
    console.log("yellow", isLoaded)
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {

        function addMarker(beanMarkerObject){
            console.log(beanMarkerObject)
            var basicMarker = new window.google.maps.Marker({
            position:{lat:beanMarkerObject.latitude,lng:beanMarkerObject.longitude},
            map:map,
            icon:beanMarkerObject.iconImage

            });
        }

        // const marker = new window.google.maps.Marker({
        //     position:{lat:40.72849314019794,lng: -73.98741403025014},
        //     icon: "http://placekitten.com/50/50",
        //     map: map,
        // })
    
        const beanMarkerObjects = [
            {
                name: "Porto Rico Importing",
                latitude: 40.718257042573775,
                longitude: -73.9881713750316
            },
            {
                name: "Porto Rico Importing",
                latitude: 40.72825256465811,
                longitude: -73.98737234837931
            },
            {
                name: "Porto Rico Importing",
                latitude: 40.72934307265706,
                longitude: -74.00137551232535
            }
        ]

        for(var i = 0; i < beanMarkerObjects.length;i++){
            console.log('test', i)
            addMarker(beanMarkerObjects[i]);
        }

        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
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
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        </div>
        )  : <></>
}


export default React.memo(BeanMap)
