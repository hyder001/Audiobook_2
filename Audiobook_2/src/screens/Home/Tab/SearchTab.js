import React, { useMemo ,useState,useEffect} from "react";
import { Text, View, ScrollView, FlatList, } from "react-native";
import { SearchTabs, Style } from '../../../styles';
import { NewRealseVideoView, Search } from '../../../components';
import { SH, SF,CategoriesData,Fonts} from '../../../utils';
import { Spacing, TopSearchView, GenersDataView,TopAudioForYouView,FreeShowDataView } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import {HomeStyles} from "../../../styles";
import AnimatedLottieView from "lottie-react-native";
import images from "../../../images";

const SearchTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const SearchTab = useMemo(() => SearchTabs(Colors), [Colors]);
  const [Booksdata, setBooksData] = useState(null);
  const [input, setInput] = useState('');
  const [noResult, setNoResult] = useState(false);

  const Categories = () => {
    //set 2 columns
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
            data={CategoriesData}
            numColumns={Math.ceil(CategoriesData.length / 2)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<FreeShowDataView onPress={() => navigation.navigate(RouteName.CATEGORIES_SCREEN)}
                item={item}
            />)}
            keyExtractor={item => item.Title}
            contentContainerStyle={{
              paddingLeft: SH(20),
              height: "45%",
            }}
        />
      </ScrollView>
    );
};
  
  
  

  useEffect(() => {
    // Function to fetch JSON data from a file
    const fetchJsonData = async () => {
      try {
        const response = await fetch('https://firebasestorage.googleapis.com/v0/b/ttest-15deq.appspot.com/o/book_data_test.json?alt=media&token=a7b89b64-9a83-4cf9-90f3-16676939ecf3'); // Replace with the actual path
        const data = await response.json();
        setBooksData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchJsonData();
  }, []);
  if(Booksdata === null) { 
    return( 
      <View style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        width:'100%',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#252525", // You can change the background color and opacity
    }}>
        <View>
        <AnimatedLottieView source={images.Loading} style={
            {
                width: SH(50),
                height: SH(50),
            }
        } 
        autoPlay loop
        />
      </View>
    </View>
    );
  }
  const filteredData = Booksdata.filter(item =>
    input === '' || item.Title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <View style={Style.MinViewScreen}>
        <View style={Style.Containers}>
          <Spacing space={SH(30)} />
          <View style={{
              width: '90%',
              alignSelf: 'center',
              borderColor: "#4D4757",
              borderWidth: SH(1),
              color: Colors.gray_text_color,
              backgroundColor: "rgba(77, 71, 87, 0.5)",
              height: SH(47),
              borderRadius: SH(10),
              position: 'relative',
          }}>
            <Search input={input} setInput={setInput}/>
          </View>
          <Spacing space={SH(30)} />
          <View style={SearchTab.MinViewConrtent}>
            <Text style={SearchTab.TopSearchText}>{t("SearchCategories")}</Text>
            <Spacing space={SH(10)} />
          </View>
          <Categories />
          <Spacing space={SH(20)} />
          <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={Style.ScrollViewStyles}>
          <View style={SearchTab.MinViewConrtent}>
            <Spacing space={SH(20)} />
            <Text style={{
              color: Colors.white_text_color,
              fontFamily: Fonts.Montserrat_Medium,
              fontSize: SF(17)
            }}>{t("Top_Audios_For_You")}</Text>
            <Spacing space={SH(20)} />
            {filteredData.length === 0 ? (
              <Text style={{
                color: Colors.white_text_color,
                fontSize: SH(15),
                fontWeight: 'bold',
                alignContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                minWidth: '100%',
                marginTop: SH(20),
               }}>
                {t("no_results")}
              </Text>
            ) : (
              <FlatList
                data={filteredData}
                numColumns={2}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <NewRealseVideoView margin={45} item={item} />
                )}
                keyExtractor={(item) => item.Title}
                contentContainerStyle={{ paddingHorizontal: SH(3), minWidth: '100%' }}
              />
            )}

          </View>
          </ScrollView>
        </View>
    </View>
  );
};
export default SearchTab;
