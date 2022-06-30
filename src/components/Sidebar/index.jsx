import * as Sidebar from './Sidebar';

export default function () {
  return (
    <Sidebar.filterSidebar>
      <h3>Redefina sua busca</h3>
      <p>Por preço</p>
      <div>
        <label htmlFor="40">
          <input type="radio" id="40" name="value-wine"/>
          Até R$40
        </label>
        <label htmlFor="40-60">
          <input type="radio" id="40-60" name="value-wine"/>
          R$40 a R$60
        </label>
        <label htmlFor="100-200">
          <input type="radio" id="100-200" name="value-wine"/>
          R$100 a R$200
        </label>
        <label htmlFor="200-500">
          <input type="radio" id="200-500" name="value-wine"/>
          R$200 a R$500
        </label>
        <label htmlFor="500">
          <input type="radio" id="500" name="value-wine"/>
          Acima de R$500
        </label>
      </div>
    </Sidebar.filterSidebar>
  )
}
