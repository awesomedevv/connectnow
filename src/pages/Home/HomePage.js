import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { Fetch } from '../../hooks/Fetch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { VideoItem } from '../../components/VideoItem'




export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(true)
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])

  const [name, setName] = useState('')
  const [tag, setTag] = useState('')



  useEffect(async () => {
    var _res = await Fetch('get', 'applicant-test/', {})


    if (_res) {
      setData(_res)
      console.log(_res)
      setSortedData(_res)

    }


    setIsLoaded(false)

  }, [])

  const searchField = (e) => {
    return
    sortByField(e.target.value, e.target.name)
  }

  const sortByField = (value, field) => {

    const name = inputName.current.value
    const tag = inputTag.current.value

    console.log(name, tag)

    getSortedData(name, tag)
  }

  const getSortedData = (name, tag) => {

    console.log(`data count: ${data.length}`)
    console.log(`name: ${name}`)
    const newData = (name.length === 0) ? data : data.filter(student => {

      const userName = `${student.firstName} ${student.lastName}`.toLowerCase()
      return userName.includes(name.toLowerCase())
    })

    console.log(newData.length)

    const newSortedData = (tag.length === 0) ? newData : newData.filter(student => {

      if (student.hasOwnProperty('tags')) {
        console.log(`found what has tags`)
        const selected = student.tags.filter(tags => tags.includes(tag))

        return selected.length !== 0
      }

      return false
    })

    setSortedData(newSortedData)
  }

  return isLoaded ? <>Loading...</> :
    (
      <section className="row">
        <section className="col-12 col-lg-3 p-3 search-panel">
          <div className="panel">
            <div className="item pt-3 panel-header">Filter Results</div>
            <div className="item">
              <span>Name (contains)</span>
              <div className="search-field">
                <input type="text" name="name" className="pl-2 pr-2 w-100 search mt-1" onChange={searchField}></input>
              </div>
            </div>
            
            <div className="item">
              <span>Minimum Score</span>
              <div className="search-field">
                <input type="text" name="name" className="w-100 search mt-1" onChange={searchField}></input>
              </div>
            </div>
            <div className="item">
              <span>Order By</span>
              <div className="order-by mt-1">
                <div className="sort-direction"><i className="bi bi-arrow-up"></i></div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton></div>
            </div>
            <div className="item clear">
              <div className="button center">
                Clear
              </div>
            </div>
          </div>

        </section>
        <section className="col-12 col-lg-9 p-3 videos">
          <div className="content">
            {
              sortedData.map((info, key) => {
                return (<VideoItem info={info} key={key} index={key} />)
              })
            }
          </div>

        </section>
      </section>
  )
}
