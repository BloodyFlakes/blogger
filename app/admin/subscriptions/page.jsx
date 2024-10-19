/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import SubsTableItem from '@/Components/AdminComponents/SubsTableItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function page() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error('Error');
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className='flex-1 px-5 pt-5 sm:pt-12 sm:pl-16'>
      <h1>All subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 '>
                Email subscription
              </th>
              <th scope='col' className='hidden px-6 py-3 sm:block'>
                Date
              </th>
              <th scope='col' className='px-6 py-3 '>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubsTableItem
                  key={index}
                  date={item.date}
                  email={item.email}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
