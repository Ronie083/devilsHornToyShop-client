import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CatTab from "./CatTab/CatTab";



const ShopCat = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div className="text-center container mx-auto">
            <h1 className="text-3xl font-bold">Shop by Category</h1>
            <p className="my-3">Choose from our large collection of Action figures</p>

            <Tabs>
                <TabList>
                    {
                        categories.map(category => <Tab key={category._Id}>{category.subCategory}</Tab>)
                    }
                </TabList>

                {
                    categories.map(category =>
                        <TabPanel key={category._Id}>
                            <CatTab category={category}></CatTab>
                        </TabPanel>)
                }
            </Tabs>
        </div >
    );
};

export default ShopCat;