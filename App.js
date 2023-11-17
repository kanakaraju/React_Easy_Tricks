import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HooksList from "./HooksList";
//create new component and add example below
import HooksListAll from "./HooksListAll";
import HooksUseState from "./HooksUseState";
import HooksUseEffect from "./HooksUseEffect";
import HooksUseNavigate from "./HooksUseNavigate";
import HooksUseReducer from "./HooksUseReducer";
import HooksUseRef from "./HooksUseRef";
import HooksUseLayoutEffect from "./HooksUseLayoutEffect";
import HooksImperativeHandle from "./HooksImperativeHandle";
import HooksContextTutorial from "./HooksContextTutorial";
import HooksUseMemo from "./HooksUseMemo";
import HooksCallbackTutorial from "./HooksCallbackTutorial";

function App() {
	return (
		<div className="ui container">
			<Router>
			<Header />
			<Routes>
			<Route path="/" exact element=
			{<HooksList />} />	
			<Route path="/hooks" exact element=
			{<HooksListAll />} />	
			<Route path="/hooks/HooksUseState" exact element={
			<HooksUseState />} />
			<Route path="/hooks/HooksUseEffect" exact element={
			<HooksUseEffect />} />
			<Route path="/hooks/HooksUseNavigate" exact element={
			<HooksUseNavigate />} />
			<Route path="/hooks/HooksUseReducer" exact element={
			<HooksUseReducer />} />
			<Route path="/hooks/HooksUseRef" exact element={
			<HooksUseRef />} />
			<Route path="/hooks/HooksUseLayoutEffect" exact element={
			<HooksUseLayoutEffect />} />
			<Route path="/hooks/HooksImperativeHandle" exact element={
			<HooksImperativeHandle />} />
			<Route path="/hooks/HooksContextTutorial" exact element={
			<HooksContextTutorial />} />
			<Route path="/hooks/HooksUseMemo" exact element={
			<HooksUseMemo />} />
			<Route path="/hooks/HooksCallbackTutorial" exact element={
			<HooksCallbackTutorial />} />
			</Routes>
			</Router>
		</div>
	);
}

export default App;
