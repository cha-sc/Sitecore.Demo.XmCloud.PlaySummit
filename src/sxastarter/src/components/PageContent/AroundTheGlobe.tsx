/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  Title: Field<string>;
}

export type AroundTheGlobe = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (): JSX.Element => {
    //const id = props.params.RenderingIdentifier;
  
    return (
        <div id="aroundTheGlobe" className="aroundTheGlobe col-12 background-purple bg-image-no-repeat bg-image-bottom-right pb-5">
            <h2 className="h1 white text-center pt-5">Kellanova around the globe</h2>
            <div className="content-container mt-3 mt-lg-5 pb-3 pb-lg-5">
                <div className="row js-filter-by-class-parent">
                    <div id="regionProducts" className="col-12">
                        <div className="container">
                            <div className="row row-cols-2 row-cols-lg-3 g-3 js-filter-by-class-parent">
                                <div className="col">
                                    <a href="https://www.kelloggs.com/en_US/brands/austin.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/austin%402x.png" alt="Austin" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.carrscrackers.com" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/NorthAmerica/kellanova-us/images/ourbrands/logos/carrsnew.png" alt="Carr's" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.cheezit.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/cheezit@2x.png" alt="Cheez-It" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.clubcrackers.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/club@2x.png" alt="Club" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.leggowitheggo.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/eggo@2x.png" alt="Eggo" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kellanovaus.com/us/en/brands/grahams.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/grahams@2x.png" alt="Grahams" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kellanovaus.com/us/en/brands/kelloggs-frozen-breakfast.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/frozen%20breakfast@2x.png" alt="Kellogg's Frozen Breakfast" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.morningstarfarms.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/msf@2x.png" alt="Morningstar Farms" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.nutrigrain.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/ng@2x.png" alt="Nutri-Grain" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.poptarts.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/pt@2x.png" alt="Pop-Tarts" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.pringles.com/us/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/pringles@2x.png" alt="Pringles" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.pureorganic.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/pure%20organic@2x.png" alt="Pure Organic" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.ricekrispiestreats.com/en-us/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/rkt%402x.png" alt="Rice Krispies Treats" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.rxbar.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/ca/rx@2x.png" alt="RxBar" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.specialk.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/special%20k@2x.png" alt="Special K" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kelloggs.com/en_US/brands/toasteds-consumer-brand.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/around-the-world/toastedsnew.png" alt="Toasteds" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.townhousecrackers.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/around-the-world/townhousenew.png" alt="Town House" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kelloggs.com/en_US/brands/zesta.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://www.kellanova.com/content/dam/global/kellanova-company/images/our-food/us/zesta@2x.png" alt="Zesta" className="lazyload"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
};