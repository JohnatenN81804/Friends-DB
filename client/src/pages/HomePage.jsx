import { useState, useEffect } from "react"
import { useUserContext } from "../ctx/UserContext"
import { Header, Post } from '../components'

export default function HomePage() {
  const { currUser } = useUserContext()
  const [ posts, setPosts ] = useState(null)

  function getPosts() {
    fetch(`/api/post/friendsposts/${currUser.data._id}`)
    .then(res => {return res.json()})
    .then(data => {
      setPosts(data.friendsPayload)
    })
  }
  
  useEffect(() => {
    if (currUser?.data?._id !== undefined) {
      getPosts()
    }

    // if (currUser?.data?.requests !== []) {
    //   // render friend request alert

    //     requests: [{
    //       requestingUser: '',
    //       requestingUserId: '',
    //     }]
    // }
    
  }, [currUser])

  if ( currUser.status === 'searching') {
    console.log('notfound')
    return (
      <>
      </>
    )
  } else if ( currUser.status === "notfound" ) {
    window.location.href = '/landing'
    return ( 
      <>
      </>
    )
  } else {


  return (
    <>

      <Header />

      { posts &&

      (posts.map((post) => (
        <Post post={post} key={post._id}/>
      )))

      }

    </>
  )
}
}