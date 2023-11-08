import React, { useMemo } from "react";
import { FlatList } from "react-native";
import { HomeStyles } from '../../styles';
import { TopAudioForYou } from '../../utils';
import { TopAudioForYouView } from '../../components';
import { useTheme } from '@react-navigation/native';
import { use } from "i18next";

const MoreThisLike = (props) => {
    const { Colors } = useTheme();
    const {id} = props;
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    const [comments, setComments] = useState([]);
    //parse comments ref in the firebase database and create a data object to pass in flatlist
    useEffect(() => {
        const db = getDatabase(app);
        const commentsRef = ref(db, 'comments/'+id);
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            const prods = Object.values(data);
            setComments(prods);
        });
    }, []);

    return (
        <FlatList
            data={TopAudioForYou}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<TopAudioForYouView
                item={item}
            />)}
            keyExtractor={item => item.id}
            contentContainerStyle={HomeStyle.FlatListStyles}
        />
    );
};
export default MoreThisLike;
