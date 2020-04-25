import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import MyStore from '../services/MyStore';
import { Button } from 'native-base';
import { observer } from 'mobx-react';
import { BookBody, BookFooter } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';




const screenHeight = Dimensions.get('window').height;
let lastPage = 1;
//667
@observer
export class BookRead extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontSize: 20,

        }
    }
    swiperOnIndexChanged = (pageIndex) => {
    }

    textProps = () => {
        let textProps = [
            { value: lorem, highlights: [{ id: "test", start: 0, end: 18, isTitle: true,backgroundColor:'red' }] },
            { value: "sayfa2", highlights: [{ id: "test", start: 20, end: 50, }] },
            { value: lorem, highlights: [{ id: "test", start: 792, end: 816, textStyle: { fontSize: 40, lineHeight: 40 } }] },
        ];
        return textProps;
    }
    onSelection = (select) => {
        console.log(select);
    }
    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#222',
                ...MyStore.textContainerStyle
            }}>
                <SafeAreaView style={{flex:1,paddingBottom:0,marginBottom:0}}>
                <BookBody
                    textProps={this.textProps()}
                    swiperOnIndexChanged={this.swiperOnIndexChanged}
                    onSelection={this.onSelection}
                    initialPageIndex={0}

                />
                </SafeAreaView>
                <BookFooter navigation={this.props.navigation} />
            </View>
        )
    }
}
export default BookRead

const lorem = `Deşifre Bulunuyor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu velit, pretium eu lacinia in, vestibulum id turpis. In sem libero, auctor eu interdum quis, eleifend in dolor. Donec rutrum aliquet felis, et consectetur elit sollicitudin ut. Vivamus et magna mi. Ut tristique, arcu nec eleifend efficitur, ipsum elit ornare ligula, vitae vulputate felis dui nec sapien. Etiam facilisis, odio quis congue consectetur, augue metus luctus leo, a ullamcorper nulla erat fermentum metus. In sollicitudin cursus lacus, non commodo sem luctus viverra. Ut massa augue, mattis quis sapien ac, molestie molestie mauris. Sed ac lorem nec dolor volutpat imperdiet. Vestibulum pharetra orci sed ex rutrum, et pretium nibh bibendum. Maecenas nulla nisl, euismod vel mi lacinia, laoreet hendrerit dui.

Praesent a arcu commodo, rutrum ipsum a, consequat lectus. Aenean lacinia lectus purus, a commodo quam viverra in. Quisque eros sapien, congue in gravida eget, rutrum a diam. Fusce varius magna neque, ut pharetra est fringilla quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a congue enim, eu mattis felis. Sed tincidunt orci libero. Donec luctus, magna luctus auctor dapibus, tellus augue vestibulum dui, at fermentum nisl turpis ac risus.

Praesent luctus felis vel tempus volutpat. Vestibulum at turpis nunc. Vestibulum sit amet diam in sapien aliquet elementum vel ac nibh. Pellentesque pellentesque fermentum dolor vitae ultricies. Proin massa ipsum, eleifend id facilisis non, varius in augue. Etiam a augue justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque mauris eros, elementum at neque quis, vulputate accumsan nunc. Aliquam scelerisque euismod lectus id egestas. Sed nec quam et tortor accumsan cursus. Aliquam erat volutpat. Ut ultrices consequat varius. Donec eu urna ornare, vehicula mauris eu, fringilla tortor. Nunc non interdum nulla. Ut ut urna in metus pretium mollis.

Donec mollis metus nibh. Aliquam tincidunt tristique mauris sed vulputate. Mauris ut vestibulum velit, a consectetur mauris. Praesent rhoncus tortor id ipsum malesuada, sit amet pellentesque libero ultricies. Suspendisse luctus, turpis vel fringilla rutrum, magna turpis rutrum est, et imperdiet magna est et diam. Praesent rutrum eros mi, eget dignissim ipsum mollis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna leo, ultrices vel lorem sed, efficitur vestibulum est. Nulla a ullamcorper diam. Duis vitae tellus nisl. Curabitur sagittis orci ut sollicitudin tincidunt. Donec felis risus, ultrices eget consequat venenatis, fermentum sed mauris. Ut vel imperdiet lacus, sit amet elementum sem. Donec mollis mauris tincidunt, tempus risus nec, vestibulum arcu.

Nunc placerat neque ut purus eleifend tincidunt. Duis dapibus, ex dictum fringilla aliquet, augue orci blandit ligula, eget finibus nibh elit eget massa. In varius laoreet arcu, a elementum quam aliquet sit amet. Sed sagittis ipsum in lacus interdum ultricies. Duis pretium erat ac turpis venenatis tincidunt. Pellentesque rutrum sapien id nunc consequat pulvinar. Maecenas leo justo, euismod non ultricies vel, accumsan ac est. Nam nec sem ut est volutpat maximus ut pulvinar sapien. Vestibulum interdum lacinia lorem non fermentum. Vivamus rutrum congue orci ac consectetur. Etiam sit amet tempor ligula, a dapibus mi. Donec ante magna, sagittis a libero nec, gravida posuere ipsum. Duis mollis nibh sem, ac volutpat nunc eleifend ac. Vivamus non dapibus ex, eu pretium ex.`;