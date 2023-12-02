import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// 페이지 번호, 이전/다음페이지, 첫/마지막 페이지 버튼
class R050_ReactstrapPagination extends Component {
    pagination = (type) =>{
        alert("Go "+type)
    }
  render() {
    return (
        <>
        <Pagination size="lg" aria-label="Page navigation exmple">
            <PaginationItem>
                {/* 속성값 : first, previous, next, last */}
                <PaginationLink previous onClik={e => this.Pagination("previous")}/>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous onClik={e => this.Pagination("1")}>
                1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous onClik={e => this.Pagination("2")}>
                2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous onClik={e => this.Pagination("last")}>
                last</PaginationLink>
            </PaginationItem>
        </Pagination>
        </>
    )
  }
}

export default R050_ReactstrapPagination