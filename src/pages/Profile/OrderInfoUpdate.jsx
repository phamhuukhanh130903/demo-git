import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,

} from 'mdb-react-ui-kit';
import ImageAvatars from "../../components/UI/Profile/avatar";
import UploadButtons from "../../components/UI/Profile/button";
import DataTable from "../../components/UI/Profile/table";

export default function OrderPageUpdate() {
    return (
        <MDBCardBody>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Address Information</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                    <DataTable/>
            </MDBRow>

        </MDBCardBody>

    )
}