import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { FloatingActionButton } from "./FloatingActionButton";
export const ModalPopup = (props) => {

  console.log("yo")
  // hooks
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ display: "none" }}
        backgroundComponent={null}
        handleHeight={40}
        

      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
            {props.test}
        </BottomSheetScrollView>
        <FloatingActionButton text={ "Add To Calendar" } positionFromTop={"88%"}></FloatingActionButton>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "#FFFFFF"
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "white",
  },
});


export default ModalPopup;
