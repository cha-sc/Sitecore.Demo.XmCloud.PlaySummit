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
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/df5c7c1f74604e05bf98781b689c8971?v=b1fb810e" alt="Austin" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.carrscrackers.com" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/2e33e665f0704425b97112f0a695fd93?v=ccc9c12d" alt="Carr's" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.cheezit.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/855ed6c8fecd4200bed591cdf1966bc5?v=f85a9366" alt="Cheez-It" className="lazyload" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.clubcrackers.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/b113a1f5b852475ca9f865156f92d539?v=3f6072d4" alt="Club" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.leggowitheggo.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/cca1e59fec954cf8927017bb1a46b2b2?v=a9f4334f" alt="Eggo" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kellanovaus.com/us/en/brands/grahams.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/398bac695e144073907c389e702c366c?v=51537617" alt="Grahams" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kellanovaus.com/us/en/brands/kelloggs-frozen-breakfast.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/cfe76e2fe1e641dd9be0d16d80813e62?v=8403de07" alt="Kellogg's Frozen Breakfast" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.morningstarfarms.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/40bd49cd88ce4b1c9eb58a33ce318f0e?v=730ef2ba" alt="Morningstar Farms" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.nutrigrain.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/73776763ad1c40f3a62f69a35e2ffec2?v=af28bdb6" alt="Nutri-Grain" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.poptarts.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/8de2e300c20a4a09889ee899a828af7e?v=e70c03dc" alt="Pop-Tarts" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.pringles.com/us/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/941115a79fe24731a8e440ae1098a763?v=cf198dcf" alt="Pringles" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.pureorganic.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/84acb7cb0c1044879b0d66b4d62e625c?v=5dec310d" alt="Pure Organic" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.ricekrispiestreats.com/en-us/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/e6396b8a311c414082e87c5b939c87fa?v=3df8e7a4" alt="Rice Krispies Treats" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.rxbar.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/351068f6030a4c69a336e0cb3258c096?v=e754208e" alt="RxBar" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.specialk.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/07652cc77682422eaaebd815d47228cc?v=2051ed5e" alt="Special K" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kelloggs.com/en_US/brands/toasteds-consumer-brand.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/12fd211697d94bf8ac5ee8f094fe4166?v=acb43c1c" alt="Toasteds" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.townhousecrackers.com/en_US/home.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/6c0958fd8aeb47bab21e3ffca160cfec?v=67f77696" alt="Town House" className="lazyload"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://www.kelloggs.com/en_US/brands/zesta.html" target="_blank" className="product-tile js-filter-item js-filter-item_UnitedStates">
                                        <img src="https://kellanova.sitecoresandbox.cloud/api/public/content/8d16f7551b574bfc8609387fe4ec1b82?v=189ec778" alt="Zesta" className="lazyload"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
};