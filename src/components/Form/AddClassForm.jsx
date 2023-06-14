import {ImSpinner10} from 'react-icons/im'

const AddClassFrom = ({
    user,
    handleSubmit,
    loading,
    handleImageChange,
    uploadButtonText,
}) => {
  
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-base-200'>
         
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='Instructor' className='block '>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3  border rounded-md bg-base-100/50 text-accent'
                                name='instructor'
                                id='instructor'
                                type='text'
                                placeholder='Instructor Name'
                                defaultValue={user?.displayName}
                                required
                            />
                        </div>
                        <div className='space-y-6 text-sm '>
                            <label htmlFor='email' className='block '>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-3  border bg-base-100/50 text-accent  rounded-md '
                                name='email'
                                id='email'
                                type='text'
                                placeholder='Instructor Email'
                                defaultValue={user?.email}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block '>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 bg-base-100/50 text-accent border  rounded-md '
                                name='price'
                                id='price'
                                type='number'
                                placeholder='Price'
                                required
                            />
                        </div>




                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='class' className='block '>
                                Class Name
                            </label>
                            <input
                                className='w-full px-4 py-3 bg-base-100/50 text-accent  border rounded-md '
                                name='class'
                                id='class'
                                type='text'
                                placeholder='Class Name'
                                required
                            />
                        </div>

                        <div className=' p-4 w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative bg-base-100/50  rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={(event) => { handleImageChange(event.target.files[0]) }}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='text-accent border rounded font-semibold cursor-pointer p-1 px-3 '>
                                            {uploadButtonText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>


                            <div className='space-y-1 text-sm'>
                                <label htmlFor='seats' className='block '>
                                    Available seats
                                </label>
                                <input
                                    className='w-full px-4 py-3  border bg-base-100/50 text-accent  rounded-md '
                                    name='seats'
                                    id='seats'
                                    type='number'
                                    placeholder='Available seats'
                                    required
                                />
                            </div>
                        </div>




                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium  bg-base-100 text-accent transition duration-200 rounded shadow-md '
                >
                    {loading ? (
                        <ImSpinner10 className='m-auto animate-spin' size={24} />
                    ) : (
                        'Add Button'
                    )}
                </button>
            </form>
        </div>
    )
}

export default AddClassFrom;