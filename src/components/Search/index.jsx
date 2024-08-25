export default function Search({onInput}) {
    
    return (
      <div>
          <input type="search" placeholder="search generators..." onInput={onInput} />
      </div>
    )
  }