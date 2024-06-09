/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import TodoList from "../components/layout/TodoList";
import Create from "../pages/write/Create";
import Complete from "./Complete";
import Delete from "./Delete";
import Search from "./Search";
import MainCalender from "./home/MainCalender";
import UserInfoPage from "./user/UserInfoPage";
import UserModify from "./user/UserModify";
import Detail from "./write/Detail";
import Modify from "./write/Modify";
import "../css/common.css";
import { useState } from "react";
import { colorSystem } from "../css/color";

const WrapStyle = styled.div`
  position: absolute;
  display: flex;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
`;

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SectionListStyle = styled.div`
  position: relative;
  /* display: flex; */
  width: 100%;
  height: 100%;
  background-color: ${colorSystem.primaryW};
`;

// "/write" 경로의 하위 라우트들을 포함한 컴포넌트
const WriteRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Create />} />
      <Route path="create" element={<Create />} />
      <Route path="detail" element={<Detail />} />
      <Route path="modify" element={<Modify />} />
    </Routes>
  );
};

const Index = () => {
  const [todoListClassAdded, setTodoListClassAdded] = useState(false);

  // todoList 메뉴 여닫는 버튼 체크
  const todoListhandleButtonClick = () => {
    // 클래스를 추가할 요소의 상태를 변경합니다.
    setTodoListClassAdded(!todoListClassAdded);
  };

  return (
    <>
      <div>
        <WrapStyle>
          <Nav />
          <MainStyle>
            <header>
              <Header todoListhandleButtonClick={todoListhandleButtonClick} />
            </header>
            <SectionListStyle>
              <SectionStyle>
                <Routes>
                  <Route path="/" element={<MainCalender />} />
                  <Route
                    path="/write/*"
                    element={<WriteRoutes />}
                    todoListClassAdded={todoListClassAdded}
                    onTodoListToggle={todoListhandleButtonClick}
                  />
                  <Route path="/complete" element={<Complete />} />
                  <Route path="/delete" element={<Delete />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/userinfo" element={<UserInfoPage />} />
                  <Route path="/usermodify" element={<UserModify />} />
                </Routes>
              </SectionStyle>
              <SectionStyle>
                <TodoList
                  todoListClassAdded={todoListClassAdded}
                  onTodoListToggle={todoListhandleButtonClick}
                  todoListClose={todoListhandleButtonClick}
                />
              </SectionStyle>
            </SectionListStyle>
          </MainStyle>
        </WrapStyle>
      </div>
    </>
  );
};

export default Index;
