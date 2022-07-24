import React from 'react'

const NewsItem = (props) => {

      let {title,description,imgUrl,url,author,date,source} =props;
    return (
      <div className="my-3">
         <div  className="card" style={{width: "16rem"}}>
           <div style ={
             {
               display : 'flex',
               justifyContent : 'flex-end',
               right : '0',
               position : 'absolute'

             }
           }>
         <span className=" badge rounded-pill bg-danger" >    {source} </span>
         </div>
  <img src={!imgUrl?"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FNo_image_available.svg%2F1024px-No_image_available.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANo_image_available.svg&tbnid=-QpL1I7u3zbiBM&vet=12ahUKEwjw2_67gN_2AhWO_DgGHQEsBHkQMygAegUIARCIAQ..i&docid=029W-ajBtZqZzM&w=1024&h=1024&q=no%20image%20photo&ved=2ahUKEwjw2_67gN_2AhWO_DgGHQEsBHkQMygAegUIARCIAQ":imgUrl} 
  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}.. 

</h5>
    <p  className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
  }

export default NewsItem
