import React from 'react'
import { View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { MyCard } from './index';
import { Text, Icon } from 'native-base'
import {imageUrl} from '../services/config'

const Title = ({ categoryId, title, isAll, onPressAll }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ padding: 10, flex: 1, paddingBottom: 20, fontWeight: '600', fontSize: 20, color: '#333' }}>{title}</Text>
            {isAll && <TouchableOpacity
                onPress={() => onPressAll(categoryId)}
                style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text>Tümünü Gör</Text>
            </TouchableOpacity>}
        </View>
    )
}


export const CardSwiper = ({items, onPressFavorite, onPressCard, title, categoryId, onPressAll, isAll, ready}) => { 
       
    return (
        <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 20, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Title title={title} isAll={isAll} categoryId={categoryId} onPressAll={onPressAll} />
            <View style={{ flexDirection: 'row', }}>
                <FlatList
                    horizontal
                    contentContainerStyle={{ paddingTop: 7, paddingBottom: 7 }}
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item) => item.index}
                    renderItem={(item) => CardSwiperItem(item,onPressFavorite, onPressCard)}
                />
            </View>
        </View>
    )
}


const CardSwiperItem = ({ item, index },onPressFavorite, onPressCard) => {

    return (
        <MyCard key={"cardbox_" + index} style={{ padding: 0, marginLeft: 10, width: 150 }}>
            <TouchableOpacity
                onPress={() => { onPressCard && onPressCard(item.id) }}>
                <Image
                    style={{ width: 150, height: 150, borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
                    source={{
                        uri: item.image ? item.image : imageUrl+'film.jpg',
                    }}
                />
                <View style={{flexDirection:'row',position: 'absolute', right: 5,top:5, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>

                
                    {item.isFree == true && <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                        <Icon style={{ fontSize: 25 }}
                            type="MaterialIcons" name="money-off" />
                    </View>}
                    {item.isListen == true && <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                        <Icon style={{ fontSize: 25 }}
                            type="MaterialCommunityIcons" name="headphones" />
                    </View>}


                </View>



                <View style={{ height: 100, padding: 10 }}>
                    <TouchableOpacity
                        onPress={() => onPressFavorite && onPressFavorite(item.id)}
                        style={{ top: 5, right: 0, paddingLeft: 5, paddingRight: 5, position: 'absolute', zIndex: 5 }}>
                        <Icon
                            type="MaterialIcons"
                            style={{ color: '#555' }}
                            name={item.isFavorite == true ? "bookmark" : "bookmark-border"} />
                    </TouchableOpacity>
                    <Text style={{ paddingRight: 20, fontWeight: '500', marginBottom: 5 }}>{item.bookName}</Text>
                    <Text style={{ fontSize: 14 }}>{item.author}</Text>
                </View>
            </TouchableOpacity>
        </MyCard>
    )

}

const screenWidth = Dimensions.get('window').width;
const boxWidth = screenWidth / 3 - 20;

export const ImageSwiper = ({ items, onPressCard, title, categoryId, onPressAll, isAll }) => {
    return (
        <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 20, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Title title={title} isAll={isAll} categoryId={categoryId} onPressAll={onPressAll} />
            <View style={{ flexDirection: 'row', }}>
                <FlatList
                    horizontal
                    contentContainerStyle={{ paddingTop: 7, paddingBottom: 7 }}
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item) => item.index}
                    renderItem={(item) => ImageSwiperItem(item,onPressCard)}
                />
            </View>
        </View>
    )
}

const ImageSwiperItem = ({ item, index }, onPressCard) => {
    return (
        <MyCard key={"cardbox_" + index} style={{ padding: 0, marginLeft: 10, width: boxWidth }}>
            <TouchableOpacity
                style={{ backgroundColor: '#000', borderRadius: 5 }}
                onPress={() => { onPressCard && onPressCard(item.id) }}>
                <Image
                    style={{ width: boxWidth, height: boxWidth, borderRadius: 5, opacity: .5 }}
                    source={{
                        uri: item.image ? item.image : imageUrl+'film.jpg',
                    }}
                />
                <Text style={{ position: 'absolute', color: 'white', zIndex: 3, paddingTop: 5, width: '100%', fontWeight: '700' }}>{item.categoryName}</Text>
            </TouchableOpacity>
        </MyCard>
    )
}