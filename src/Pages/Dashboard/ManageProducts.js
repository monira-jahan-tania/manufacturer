import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ToolRow from './ToolRow';

const ManageProducts = () => {
    const [deletingTool, setDeletingTool] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>{tools.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <ToolRow
                                key={tool._key}
                                tool={tool}
                                index={index}
                                setDeletingTool={setDeletingTool}
                            ></ToolRow>)
                        }



                    </tbody>
                </table>
            </div>
            {deletingTool && <DeleteConfirmModal
                deletingTool={deletingTool}
                refetch={refetch}
                setDeletingTool={setDeletingTool}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;