import { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { PropertyItem } from "../../components";
import { getProperties } from "../../store/property/propertySlice";

const PropertyList = ({ navigation }) => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [properties]);

  const onHandlerEdit = (id) => {
    navigation.navigate("EditProperty", { propertyId: id });
  };

  const onHandlerSelect = (id) => {
    navigation.navigate("PropertyDetail", { propertyId: id });
  };

  const renderItem = ({ item }) => (
    <PropertyItem {...item} onSelect={onHandlerSelect} onEdit={onHandlerEdit} />
  );

  return (
    <FlatList
      data={properties}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={(item) => (!item.id ? item.id : 1)}
    />
  );
};

export default PropertyList;
