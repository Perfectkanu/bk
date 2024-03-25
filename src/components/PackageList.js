import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function PackageList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm) {
      alert('Please enter a tracking number.');
      return;
    }

    try {
      const response = await axios.get(`${ API_BASE_URL }/packages/search?trackingNumber=${searchTerm}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching for package:', error);
      setSearchResult(null);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter tracking number"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h2>Tracking Information</h2>
      <div>
        <p style={{ display: 'inline' }}>Hi </p>
        <h2 style={{ display: 'inline' }}>{searchResult.receiverName}</h2>
      </div>
      
      {searchResult && (
        <div>
          <h3>Package Details</h3>
          <div>Tracking Number: {searchResult.trackingNumber}</div>
          <div>Status: {searchResult.status}</div>
          <div>Delivery Date: {searchResult.deliveryDate}</div>
          <div>Sender's Name: {searchResult.senderName}</div>
          <div>Sender Address: {searchResult.senderAddress}</div>
          <div>Receiver Name: {searchResult.receiverName}</div>
          <div>Receiver Address: {searchResult.receiverAddress}</div>
          <div>Package Details: {searchResult.packageDetails}</div>
          {/* Add more package details here */}
        </div>
      )}
      {!searchResult && searchTerm && <div>No package found.</div>}
    </div>
  );
}

export default PackageList;
