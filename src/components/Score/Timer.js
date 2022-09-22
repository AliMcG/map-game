function Timer() {
  const time = new Date()
  const mins = time.setMinutes(5)
  console.log(mins)
  console.log(time)
  return ( <div>
    <h1>time: {time}</h1>
  </div> );
}

export default Timer;