import React, {useContext, useEffect, useState} from 'react';
import { Wrapper, ListOuterWrapper, ListHeadingWrapper, ListWrapper, MainListWrapper, ListTitleWrapper, GetButton,
    ItemWrapper1, ItemWrapper2} from './CategoryView.styles';
import {useRef} from "react"
import { DataContext } from '../../context/DataContext';
import { Category } from '../../types/Category';
import { AddCategoryInput } from '../../types/AddCategoryInput';

type Props = {}

const CategoryView: React.FC<Props> = () => {
        
    const newCategory = (name: string) => {
        const inp = new AddCategoryInput(name);
    }

    const createTitle = () => {
        return (
            <ListTitleWrapper>
                <h2>Categories</h2>
                <GetButton isSelected={true} onClick={() => newCategory('Category 99')}></GetButton>
            </ListTitleWrapper>        
        )
    }

    const createHeading = () => {
        return (
            <ListHeadingWrapper>
                <ItemWrapper1>Id</ItemWrapper1>
                <ItemWrapper2>Name</ItemWrapper2>
            </ListHeadingWrapper>        
        )
    }

    const createList = () => {
        const catList: Category[] = [];
        
        if (catList && catList.length > 0) {
            return (
                <ListOuterWrapper>
                    <div className="list">
                        {catList!.map((item: Category, index) => {
                            return (
                                <ListWrapper key={item.id}>
                                    <ItemWrapper1>{item.id}</ItemWrapper1>
                                    <ItemWrapper2>{item.name.toString()}</ItemWrapper2>
                                </ListWrapper>    
                            )
                        })}
                    </div>
                </ListOuterWrapper>
            )
        }
        return (
            <div>No data to display</div>
        )
    }

    return (

        <Wrapper>
            {createTitle()}
            {createHeading()}
            {createList()}
        </Wrapper>
    );
}
export default CategoryView;

