function SubsTableItem({ email, date, mongoId, deleteEmail }) {
  const emailDate = new Date(date);

  return (
    <tr className='text-left bg-white border-b'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
      >
        {email ? email : 'No email'}
      </th>
      <td className='hidden px-6 py-4 sm:block'>{emailDate.toDateString()}</td>
      <td
        onClick={() => deleteEmail(mongoId)}
        className='py-4 cursor-pointer px-11'
      >
        x
      </td>
    </tr>
  );
}

export default SubsTableItem;
