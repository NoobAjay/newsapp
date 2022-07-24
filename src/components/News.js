import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) =>{
  const[articles,setArticles] = useState([])
  const[loading,setLoading] = useState(false)
  const[page,setPage] = useState(1)
  const[totalResults,setTotalResults] = useState(0)
  // const[progress,setProgress] = useState(0)
 
  const capitalizeFirstLetter=(string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  


 
  const  updateNews=async()=>{
    props.setProgress(10);
    let url =` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&{page}&pageSize=${props.pageSize}`;
   setLoading(true)
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);  

  }

  useEffect(() => {
  document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;
  updateNews();
  
  },[])
  


  
  const handlePrevClick = async ()=>{
    // let url =` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e95e7ce825464f809fdc59681a106ea6&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles})
    
    // this.setState({
    //   page : this.state.page-1,
    //   articles : parsedData.articles,
    //   loading:false
    //      })
    setPage(page-1)
    updateNews();

  }

 const handleNextClick = async ()=>{
//     if(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)){

//     }
//     else{

    
//     let url =` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e95e7ce825464f809fdc59681a106ea6&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//     this.setState({loading:true});
//     let data= await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({articles: parsedData.articles})


//     this.setState({
// page : this.state.page+1,
// articles : parsedData.articles,
// loading:false
//     })
//   }
setPage(page+1)
updateNews();

  }

  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
   
   const url =` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
  // setLoading(true)
   let data= await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
   setArticles(articles.concat( parsedData.articles))
   setTotalResults(parsedData.totalResults)
   setLoading(false)
  


  };

  
  
    console.log("render")
    return (
      <>
       <h1 className="text-center " style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
 {/* {loading&& <Spinner/>} */}
 <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
       < div className="container">
       <div className="row"> 
       { articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}  imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
       })}      
      
   
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


      </div> */}
      </>
    )
  
}


News.defaultProps = {
  country: 'in',
  pageSize:8,
  category:'general',

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,

}

export default News
// .slice(0 to jevdhe character set karyche astil tevdhe)