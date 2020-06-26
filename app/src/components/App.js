import React from 'react';
import DataList from './DataList';

const App = () => {
  return (
    <div className='ui container' style={{marginTop: '50px'}}>
      <h2 class="ui center aligned icon header">
  <i class="circular barcode icon"></i>
  Programming Quotes
</h2>
<br/>
      <DataList />
    </div>
  )
};

export default App;