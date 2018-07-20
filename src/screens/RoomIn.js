import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components';
import Images from '@assets';
import LinearGradient from 'react-native-linear-gradient';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PropTypes from 'prop-types';

import NaviHeader from '../components/NaviHeader';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';

const { width: deviceWidth } = Dimensions.get('window');
const DATAS = [
  { id: '0', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
  { id: '1', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
  { id: '2', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
  { id: '3', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
  { id: '4', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
  { id: '5', text: '안녕하세요! 반갑습니다 저는 전날에 일이 있어서 조금 늦게 참석도 가능한가요?' },
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #2186f8;
`;

const Header = styled(LinearGradient)`
  flex: 1.1;
`;

const Body = styled.View`
  flex: 3;
  background-color: white;
`;

const ChatTextInput = styled.TextInput`
  background-color: orange;
  height: 44px;
  padding-left: 24px;
  justify-content: center;
  flex: 3.5;
`;

const RegButton = styled(BaseButton)`
  flex: 1;
  height: 44px;
  background-color: blue;
`;

const Bottom = styled.View`
  flex: 0.3;
  flex-direction: row;
`;

const RegText = styled(BaseText)`
  font-size: 15.9;
`;

const NameText = styled(BaseText)`
  color: black;
  font-size: 14;
  text-align: center;
  margin-top: 10px;
`;

const LocationText = styled(BaseText)`
  color: #2186f8;
  margin-top: 12px;
  font-size: 12;
  text-align: center;
`;

const LabelText = styled(BaseText)`
  color: #666666;
  font-size: 12;
`;

const LabelContent = styled(BaseText)`
  font-family: NanumSquareB;
  color: #666666;
  font-size: 12;
`;

const ContentText = styled(BaseText)`
  color: #666666;
  font-size: 12;
  line-height: 19px;
  padding-horizontal: 23px;
  margin-top: 11px;
`;

const KeyBoard = styled(KeyboardSpacer)``;

const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center', paddingBottom: 30 },
})``;

const HeaderText = styled(BaseText)`
  font-size: 18;
  font-weight: 400;
`;

const ContentsView = styled.View``;

const CommentView = styled.View`
  padding-top: 31px;
  align-items: center;
`;

const InfoView = styled.View`
  flex-direction: row;
  margin-top: 11px;
  justify-content: center;
`;

const JoinButton = styled(BaseButton)``;

const JoinView = styled(LinearGradient)`
  margin-top: 36px;
  height: 46px;
  width: ${deviceWidth - 48}px;
  padding: 1.5px;
`;

const JoinInnerView = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const CommentsList = styled.FlatList`
  border-top-width: 1px;
  border-top-color: #dcdcdc;
`;

const CommentListView = styled.View`
  background-color: red;
  padding: 11px 24px 22px 24px;
`;

const JoinText = styled(BaseText)`
  color: #2186f8;
  font-size: 14;
  font-family: NanumSquareB;
`;

const CommentTitleText = styled(BaseText)`
  color: black;
  font-size: 14;
  font-family: NanumSquareB;
  text-align: center;
`;

const Separator = styled.View`
  height: 1;
  background-color: #dcdcdc;
`;

class RoomIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  back = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  separator = () => <Separator />;

  renderCenterView = () => <HeaderText>영수와 함께하는 한강여행!</HeaderText>;

  renderItem = ({ item }) => (
    <CommentListView>
      <BaseText>{item.text}</BaseText>
    </CommentListView>
  );

  render() {
    return (
      <Container>
        <Header colors={['#2186f8', '#1fa6df']}>
          <NaviHeader
            style={{ paddingBottom: 70 }}
            centerView={this.renderCenterView}
            onBack={this.back}
          />
        </Header>
        <Body>
          <View
            style={{
              width: 110,
              height: 110,
              borderRadius: 55,
              backgroundColor: 'white',
              marginTop: -60,
              alignSelf: 'center',
            }}
          />
          <Scroll>
            <ContentsView>
              <NameText>조영니</NameText>
              <InfoView>
                <LabelText>시간</LabelText>
                <LabelContent>11:00 / </LabelContent>
                <LabelText>인원</LabelText>
                <LabelContent>15명 / </LabelContent>
                <LabelText>회비</LabelText>
                <LabelContent>20,000원</LabelContent>
              </InfoView>
              <LocationText>여의도 한강공원</LocationText>
              <ContentText>
                난지 캠핑장에서 캠핑하실 분들 구합니다. 저는 모든 장비를갖추 고 있어서 바베큐 파티에
                쓸 고기만 사서 우리 같이 놀아봐요!ㅁ! 구합니다. 저는 모든 장비를 갖추고 있어서
                바베큐 파티에 쓸 고기만 사서 우리 같이 놀아봐요!ㅁ
              </ContentText>
              <JoinButton onPress={() => alert('touch!')}>
                <JoinView colors={['#2186f8', '#00c0c9']}>
                  <JoinInnerView>
                    <JoinText>참여하기</JoinText>
                  </JoinInnerView>
                </JoinView>
              </JoinButton>
            </ContentsView>
            <CommentView>
              <CommentTitleText>댓글</CommentTitleText>
              <CommentsList
                data={DATAS}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.separator}
              />
            </CommentView>
          </Scroll>
        </Body>
        <Bottom>
          <ChatTextInput placeholder="궁금한 사항을 댓글로 물어보세요" />
          <RegButton>
            <RegText>등록</RegText>
          </RegButton>
        </Bottom>
        <KeyBoard topSpacing={20} />
      </Container>
    );
  }
}

export default RoomIn;