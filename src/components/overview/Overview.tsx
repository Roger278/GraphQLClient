import React, {useContext, useEffect, useState} from 'react';
import { PageContentWrapper, TopWrapper, BottomWrapper } from './Overview.styles';
import {useRef} from "react"
import CategoryView from '../category-view/CategoryView';

type Props = {}

const Overview: React.FC<Props> = () => {
        
    useEffect(() => {
        // Get categories/products/reviews

        
    }, []);

    return (
        <>
            <PageContentWrapper>
                <TopWrapper>
                    <h1>QraphQL Client</h1>
                </TopWrapper>
                <BottomWrapper>
                    <CategoryView></CategoryView>
                </BottomWrapper>
            </PageContentWrapper>
       </>
    );}
export default Overview;
