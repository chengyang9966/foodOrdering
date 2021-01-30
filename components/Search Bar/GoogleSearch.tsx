import React from "react";
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
const GooglePlacesInput = (props: any) => {
  const { navigation } = props;
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Location"
      currentLocation={true}
      minLength={2} // minimum length of text to search
      listViewDisplayed="auto"
      fetchDetails={true}
      onPress={(data, details = null) => {
        console.log(
          "🚀 ~ file: GoogleSearch.tsx ~ line 11 ~ GooglePlacesInput ~ data",
          data
        );

        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        navigation.navigate("Item");
      }}
      query={{
        key: "AIzaSyCs2tiQRXM6C73FpdF6OPtLQlRw8LwEm-w",
        language: "en",
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      currentLocationLabel="Current location"
    />
  );
};

export default GooglePlacesInput;
