## React Projects Starter APP
```
const removeTour = (id) => {
  const newTours = tours.filter( tour => tour.id !== id)
  setTours(newTours)
}
```