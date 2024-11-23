import { useState, useEffect } from 'react';
import { motion, useMotionvalue, useTransform, animate } from 'framer-motion';
import { interpolate } from "flubber";

import myImg from '../../assets/me.png';


export default function meMyself() {


    return (
        <div className="img-section max-w-[450px] min-w-[300px] hidden md:block">
            <img src={myImg} alt="I and I" className="w-full h-auto object-contain rounded-xl" />
        </div>
    )
}