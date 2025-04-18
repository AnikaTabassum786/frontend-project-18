import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])
    const data = useLoaderData()
    console.log(data);

    useEffect(()=>{
         const storeBookData = getStoreBook()
        //  console.log(storeBookData)
         const ConvertedStoreBooks =storeBookData.map(id=>parseInt(id)) 
        //  console.log(ConvertedStoreBooks)
        const myReadList = data.filter(book=>ConvertedStoreBooks.includes(book.bookId))
        // console.log(myReadList)
        setReadList(myReadList)
    },[])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read {readList.length}</h2>
                    <div className='grid grid-cols-3 gap-10'>
                    {
                        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Fav Book</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;