import * as React from "react";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
export interface CardContainerProps {
  storeName: string;
  halal: boolean;
  cuisine: string;
  distant: number;
  time: number;
  id: number;
  navigation: any;
}

const CardContainer = (props: CardContainerProps) => {
  const { id, storeName, halal, cuisine, distant, time, navigation } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <Card
      style={{ backgroundColor: colors.background }}
      onPress={() =>
        navigation.navigate(":Name", {
          id: id,
          storeName: storeName,
        })
      }
    >
      <Card.Cover
        source={{
          uri:
            "https://i.insider.com/59b9777c59d82e3f008b4745?width=1100&format=jpeg&auto=webp",
        }}
      />
      <Card.Content
        style={{ backgroundColor: colors.accent, marginBottom: 30 }}
      >
        <Title
          style={[
            {
              fontFamily: fontFamily,
              fontSize: title,
              color: colors.text,
              fontWeight: "bold",
            },
            style.card,
          ]}
        >
          {storeName}
        </Title>
        <Paragraph
          style={[
            { fontFamily: fontFamily, fontSize: bodyFont, color: colors.text },
            style.card,
          ]}
        >
          ~ {halal ? "Halal" : "Non-Halal"} ~
          <Paragraph
            style={[
              {
                fontFamily: fontFamily,
                fontSize: bodyFont,
                color: colors.text,
              },
              style.cuisine,
            ]}
          >
            {cuisine} ~
          </Paragraph>
        </Paragraph>

        <Paragraph
          style={[
            { fontFamily: fontFamily, fontSize: SmallFont, color: colors.text },
            style.distant,
          ]}
        >
          {distant} KM
          <Paragraph
            style={[
              {
                fontFamily: fontFamily,
                fontSize: SmallFont,
                color: colors.text,
              },
            ]}
          >
            {time} MINS
          </Paragraph>
        </Paragraph>
      </Card.Content>
      {/* <Card.Cover source={} /> */}
    </Card>
  );
};

export default CardContainer;

const style = StyleSheet.create({
  card: {
    textAlign: "center",
  },
  cuisine: {
    marginLeft: 10,
  },
  distant: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
