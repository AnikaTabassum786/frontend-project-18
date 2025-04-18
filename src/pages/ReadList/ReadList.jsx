import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDb';
import Book from '../Book/Book';



const ReadList = () => {

    const [readList, setReadList] = useState([])
    const [sort,setSort]= useState('')


    const data = useLoaderData()
    console.log(data);

    useEffect(() => {
        const storeBookData = getStoreBook()
        //  console.log(storeBookData)
        const ConvertedStoreBooks = storeBookData.map(id => parseInt(id))
        //  console.log(ConvertedStoreBooks)
        const myReadList = data.filter(book => ConvertedStoreBooks.includes(book.bookId))
        // console.log(myReadList)
        setReadList(myReadList)
    }, [])

    const handleSort=(type)=>{
        setSort(type)

        if(type === 'pages'){
            const sortByPage = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortByPage)
            console.log(sortByPage)
        }
        if(type==='ratings'){
            const sortByRating = [...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortByRating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sorted By:{sort?sort:''}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort('pages')}>Pages</a></li>
                    <li><a onClick={()=>handleSort('ratings')}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read {readList.length}</h2>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
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