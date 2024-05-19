import Footer from '../../components/footer/footer';
import './sidebar.css'

export const SideBar = () => {
  return (
    <>
      <div className='sideBarDiv'>
        <div className='sideFilter'>
          <p className='filterTitle'>Filter</p><i class="fa fa-filter sidebar-filter" aria-hidden="true"></i>
          <div className='filterBrands'>
            <ul>Brand <i class="fa fa-caret-down" aria-hidden="true"></i>
              <li>Samsung <input type="checkbox" name='Samsung' value="Samsung" /></li>
              <li>Apple <input type="checkbox" name='Apple' value="Apple" /></li>
              <li>Nokia <input type="checkbox" name='Nokia' value="Nokia" /></li>
              <li>Motorola <input type="checkbox" name='Motorola' value="Motorola" /></li>
              <li>OnePlus <input type="checkbox" name='OnePlus' value="OnePlus" /></li>
              <li>Huawei <input type="checkbox" name='Huawei' value="Huawei" /></li>
              <li>Microsoft <input type="checkbox" name='Microsoft' value="Microsoft" /></li>
              <li>Xiaomi <input type="checkbox" name='Xiaomi' value="Xiaomi" /></li>
              <li>Sony <input type="checkbox" name='Sony' value="Sony" /></li>
              <li>LG <input type="checkbox" name='LG' value="LG" /></li>
              <li>Lenovo <input type="checkbox" name='Lenovo' value="Lenovo" /></li>
            </ul>
          </div>
          <div className='filterPrice'>
            <ul>Price
                <li>
                  <input type="number" class="min-input" placeholder="Min"/>
                  <input type="number" class="max-input" placeholder="Max" /> 
                </li>    
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SideBar;