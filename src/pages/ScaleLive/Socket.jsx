import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

export default function Socket() {
    useEffect(()=> {
        const socket = io('http://localhost:3000')
    },[])
  return (
    <div>Socket</div>
  )
}
