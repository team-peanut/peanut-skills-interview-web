import React from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';


function DefaultLayout(props: any) {
  return (
    <div>
        <PageHeader />
          
        <main>
            <Outlet />
        </main>

        <PageFooter />
    </div>
  );
}

export default DefaultLayout;