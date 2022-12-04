// 引入套件
import { Avatar, Card, Progress, Col, Row, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import home_css from './home.module.css';

import AvatarImg from '../../assets/頭像.jpg';
import VueImg from '../../assets/vue.png';
import ReactImg from '../../assets/logo.svg';
import AngularImg from '../../assets/angular.png';
import DjangoImg from '../../assets/Django.png';
import FlaskImg from '../../assets/Flask.png';
import LaravelImg from '../../assets/Laravel.png';
import FastapiImg from '../../assets/Fastapi.png';

function home() {
  document.title = '首頁';
  return (
    
    <div className={home_css.home_container}>
      
      {/* 關於我 */}
      <div className={home_css.home_div}>
        <h3 className={home_css.h3}>關於我</h3>
        <div className={home_css.About_Me}>
          <div className={home_css.avatar_img}>
            <Avatar size={250} src={AvatarImg} />
          </div>
          <div className={home_css.avatar_Msg}>
            <Card title={<span className={home_css.avatar_Msg_span}>自我介紹</span>}>
              <div style={{textAlign: 'justify'}}>
                <span className={home_css.avatar_Msg_span}>我是Wei，來自台灣的網頁開發菜鳥，現在正在努力的學習網頁開發相關技術</span>
              </div>
              <div>
                <div>
                  <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={VueImg} /> Vue</p>
                  <Progress percent={50} />
                </div>
                <div>
                  <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={ReactImg} /> React</p>
                  <Progress percent={30} />
                </div>
                <div>
                  <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={AngularImg} /> Angular</p>
                  <Progress percent={20} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 技能 */}
      <div>
        <h3 className={home_css.h3}>技能</h3>
        <div>
          <div className={home_css.skill_font}>
            <h5 className={home_css.h5}>前端技術</h5>
            <div>
              <Row gutter={16} className={home_css.Row_div}>
                <Col span={6} className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={VueImg} /> Vue</p>
                      <Progress percent={50} />
                    </div>
                  </Card>
                </Col>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={ReactImg} /> React</p>
                      <Progress percent={30} />
                    </div>
                  </Card>
                </Col>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={AngularImg} /> Angular</p>
                      <Progress percent={20} />
                    </div>
                  </Card>
                </Col>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={DjangoImg} /> Django </p>
                      <Progress percent={35} />
                    </div>
                  </Card>
                </Col>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={FlaskImg} /> Flask</p>
                      <Progress percent={25} />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          {/* 後端技術 */}
          <div className={home_css.skill_back}>
            <h5 className={home_css.h5}>後端技術</h5>
            <div>
              <Row gutter={16}  className={home_css.Row_div}>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={LaravelImg} /> Laravel 8</p>
                      <Progress percent={45} />
                    </div>
                  </Card>
                </Col>
                <Col span={6}  className={home_css.skill_card_col}>
                  <Card bordered={false}>
                    <div>
                      <p className={home_css.avatar_Msg_p}> <Avatar size={50} src={FastapiImg} /> Fastapi</p>
                      <Progress percent={35} />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      {/* 工作經驗 */}
      <div>
        <h3 className={home_css.h3}>工作經驗</h3>
        <div>
          <Card bordered={false}>
            <Timeline mode="alternate">
              <Timeline.Item className={home_css.WorkExperience_il}  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                <div>
                  <span>暑期校外實習</span>
                </div>
                <div>
                  <span>2022/07/01 ~ 2022/09/30</span>
                </div>
              </Timeline.Item>
              <Timeline.Item className={home_css.WorkExperience_il} color="green">
                <div>
                  <span>校內工讀</span>
                </div>
                <div>
                  <span>2022-01-01 ~ 2022-06-30</span>
                </div>
              </Timeline.Item>
              <Timeline.Item className={home_css.WorkExperience_il}>
                <div>
                  <span>校內工讀</span>
                </div>
                <div>
                  <span>2021-07-01 ~ 2022-12-31</span>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </div>
      
    </div>
  );
}

export default home;
