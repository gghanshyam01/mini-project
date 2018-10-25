import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface Customer {
  _id: string;
  vehicleNumber: string;
  customerName: string;
  contactNumber: string;
  carMake: string;
  carModel: string;
  vehicleType: string;
  isAssignedToUser: boolean;
  finished: boolean;
  newlyAssigned: boolean;
  feedback: [
    {
      comment: string;
      nextDate: string;
    }
  ];
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Customer[] = [];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<Customer> {
  data: Customer[] = EXAMPLE_DATA;

  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    customers: Customer[]
  ) {
    super();
    this.data = customers;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Customer[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Customer[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Customer[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'customerName':
          return compare(a.customerName, b.customerName, isAsc);
        case 'carMake':
          return compare(a.carMake, b.carMake, isAsc);
        case 'carModel':
          return compare(a.carModel, b.carModel, isAsc);
        case 'vehicleNumber':
          return compare(a.vehicleNumber, b.vehicleNumber, isAsc);
        case 'contactNumber':
          return compare(+a.contactNumber, +b.contactNumber, isAsc);
        case 'feedback':
          return compare(a.feedback, b.feedback, isAsc);
        case 'vehicleType':
          return compare(a.vehicleType, b.vehicleType, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
