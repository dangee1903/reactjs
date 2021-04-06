import * as configs from './../constants/config';

// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
// const queryString = require('query-string');

export default class GetThuTuc{
    static config = {
        method : 'POST',
        headers: {
            // 'Access-Control-Allow-Origin' : '*',
            // 'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6RWpXakUxRzRsb2tsd2NrU0VVNi04endBcUg0MUJua1NVRjcxTGUtZmk0In0.eyJleHAiOjE2MTc2OTA1MzQsImlhdCI6MTYxNzY5MDIzNCwiYXV0aF90aW1lIjoxNjE3Njc4OTM4LCJqdGkiOiJkNjBjOGQ3MS03Nzk5LTQ0NzMtYmU4YS0xNDliNzU1MmU3N2IiLCJpc3MiOiJodHRwOi8vMTAuMzAuMS40MDo4MDgwL2F1dGgvcmVhbG1zL2N5YmVyY2FyZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjNTQ3ODliNi0xYTUzLTQ0YmItOTIwYi1mM2M4NTY4ZGU4ZDkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmcm9udGVuZCIsIm5vbmNlIjoiY2IwODYwMGUtMDcxMi00NWEzLThhNTUtNmYxYmNlNzFlMWNkIiwic2Vzc2lvbl9zdGF0ZSI6IjM5Zjk3NWZmLWQ3NDgtNDkyMC1hZTJhLTE3Y2UyNTNlYTI0NyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlRhIFRoYWkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyY3liZXJjYXJlIiwiZ2l2ZW5fbmFtZSI6IlRhIiwiZmFtaWx5X25hbWUiOiJUaGFpIiwiZW1haWwiOiJkYW5nZWUxOTAxQGdtYWlsLmNvbSJ9.XG38RbV1i7CBhrBbDbcyKjPj6xkeJJbCl9c1kpcUKudf8oDw1GA9dTuR8_R4l_ZVXNc4nvJzgqdqaVlzHEqJD3nLSQjSbllP7sIHDZOFMc_d-04E2nw9YyyHJtRaCR9D1Xs1bu3d0K54LzGz0TrgvEcKmompUowKvQa2CtHiF-G2mTzKmvfVNpO_Fm1YvbJV96cqTpVDW57uGTgXYad0-mm_VYv2f0HdpQ2KyBOSRm7eYvtjhALf8bs4-CmU3pKWUaKT7ct8oQ_qvN5YpicTz9rk9lI9bkzhbDPTz_B4ArHMEtqYBrr26VRfdD_jpQDtu8vPN8cjSyziOZpL7ZkbgQ',
        },
        body:JSON.stringify({
            "kyKeKhai": 2020,
            "lanKeKhai": 20,
            "bhD01": [
                {
                    "thutucId": "100",
                    "donviMa": "TTP001",
                    "donviTen": "TTP Plaza",
                    "tenBangKe": "ABC",
                    "tenthutuckemtheo": "XYZ",
                    "chitiet": [
                        {
                            "nguoilaodongId": 100,
                            "donviMa": "TTP001",
                            "donviTen": "TTP Plaza",
                            "hoTen": "Le Duy Hiep"
                        }
                    ]
                }
            ]
        })
        // {
        //     "kyKeKhai": 2020,
        //     "lanKeKhai": 20,
        //     "bhD01": [
        //         {
        //             "thutucId": "100",
        //             "donviMa": "TTP001",
        //             "donviTen": "TTP Plaza",
        //             "tenBangKe": "ABC",
        //             "tenthutuckemtheo": "XYZ",
        //             "chitiet": [
        //                 {
        //                     "nguoilaodongId": 100,
        //                     "donviMa": "TTP001",
        //                     "donviTen": "TTP Plaza",
        //                     "hoTen": "Le Duy Hiep"
        //                 }
        //             ]
        //         }
        //     ]
        // }
    }
    static getThutuc(){
        let url = `http://10.30.1.173:8081/api/v1/thutuc/hinhthucnop`;
        return fetch(url,GetThuTuc.config).then((response) => response.json())
    }
}