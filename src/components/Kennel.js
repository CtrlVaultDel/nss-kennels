import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";

// It is the parent component of the NavBar and Application Views
// It bundles them together and renders the two child components

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
);