class Page<T> {
    content: Array<T>;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    // pageable: {sort: {sorted: false, unsorted: true, empty: true}, offset: 0, pageNumber: 0, pageSize: 10,…}
    size: number;
    sort: { sorted: false, unsorted: true, empty: true }
    totalElements: number;
    totalPages: number;
}

export default Page;
