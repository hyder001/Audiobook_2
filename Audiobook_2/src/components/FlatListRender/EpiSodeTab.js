import React, { useMemo,useState ,useEffect} from "react";
import { Text, View, FlatList, TouchableOpacity, } from "react-native";
import { MusicDetailsStyle } from '../../styles';
import { SH, SF, DownLoadData } from '../../utils';
import { Spacing, VectorIcons, DownLoadDataView } from '../../components';
import {PremiumWarningModal} from '../commonComponents';
import { useTranslation } from "react-i18next";
import { useTheme ,useRoute} from '@react-navigation/native';
import { getDatabase,ref,onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

const EpiSodeTab = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { onPress, onPressPremum, Premium } = props;
    const {params} = useRoute();
    const trackData = params?.trackData;
    const MusicDetailsStyles = useMemo(() => MusicDetailsStyle(Colors), [Colors]);
    const [episodesdata,setepisodesdata] = useState([]);
    const firebaseConfig = {
        apiKey: "AIzaSyDAAJcqi2yWOwCDy0CT4XyClzYWBuoFxJY",
        authDomain: "ttest-15deq.firebaseapp.com",
        databaseURL: "https://ttest-15deq-default-rtdb.firebaseio.com",
        projectId: "ttest-15deq",
        storageBucket: "ttest-15deq.appspot.com",
        messagingSenderId: "635903839764",
        appId: "1:635903839764:web:76aef03979e74c3f376101"
      };
    const app = initializeApp(firebaseConfig);

    useEffect(() => {
        const db = getDatabase(app);
        const audiobooksref = ref(db, "audioBooks/"+trackData.id);

        // Read a newReleases reference from the Realtime Database
        onValue(audiobooksref, (snapshot) => {
            const data = [];
            snapshot.forEach(childSnapshot => {
                const release = {
                    Text: childSnapshot.child('Title').val(),
                    Min: childSnapshot.child('Min').val(),
                };
                if(release.Min !=null){
                    data.push(release);
                }
            });
            setepisodesdata(data);
        });

    }, []);
    
    return (
        <View>
            <Spacing space={SH(10)} />
            <FlatList
                data={episodesdata}
                numColumns={1}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<DownLoadDataView
                    item={item}
                    Premium={Premium}
                    onPress={() => onPressPremum()}
                />)}
            />
        </View>
    );
};
export default EpiSodeTab;
