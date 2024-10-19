import { ConnectDb } from '@/lib/config/db';
import EmailModel from '@/lib/models/EmailModel';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await ConnectDb();
};
LoadDB();

// Creating API Endpoint For Get All Emails
export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

// Creating API Endpoint For Adding Email
export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  };

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: 'Email Subscribed' });
}

// Creating API Endpoint To Delete Email
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');

  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: 'Email Deleted' });
}
