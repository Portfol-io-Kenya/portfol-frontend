import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import client from './client'
import { JobPaginator } from '@/types'
import { mapJobPaginatorData } from './utils/data-mapper'


const useJobs = () => {
    const { 
        data,
        isLoading,
        error,
        fetchNextPage,
        fetchPreviousPage,
        isFetching,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
        ...result 
    } = useInfiniteQuery<JobPaginator>({
        queryKey: ["jobs"],
        queryFn: ({ pageParam = 1 }) => client.jobs.all(),
        // @ts-ignore
        suspense: true,
        staleTime: 5 * 1000,
        getNextPageParam: (lastPage, allPages) => lastPage.next_page_url,
        getPreviousPageParam: (firstPage, allPages) => firstPage.prev_page_url,
    })

    function handleLoadMore() {
        fetchNextPage();
    }

    return {
        //@ts-ignore
        jobs: data?.pages.flatMap((page) => page.data) ?? [],
        // paginatorInfo: Array.isArray(data?.pages)
        //     ? mapJobPaginatorData(data?.pages[data.pages.length - 1])
        //     : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage),
    }
}

export { useJobs }
