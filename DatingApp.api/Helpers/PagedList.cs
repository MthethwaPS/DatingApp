using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.api.Helpers
{
    public class PagedList<T> : List<T>
    {
        public PagedList(List<T> items, int currentPage, int pageSize, int totalCount)
        {
            this.CurrentPage = currentPage;
            this.TotalPages = (int)Math.Ceiling(Count / (double)pageSize);
            this.PageSize = pageSize;
            this.TotalCount = totalCount;
            this.AddRange(items);
        }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }

        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize){
            
            var count = await source.CountAsync();
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PagedList<T>(items: items, totalCount:count ,currentPage: pageNumber, pageSize:pageSize);
        } 

    }
}