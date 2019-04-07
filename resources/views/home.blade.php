@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Images</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Main</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Slug</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($images as $image)
                                <tr id="table-row-{{$image->id}}">
                                    <td><input type="checkbox" @if($image->main) checked @endif id="{{$image->id}}"></td>
                                    <td><a href="#modal-{{$image->id}}" data-toggle="modal" data-target="#modal-{{$image->id}}">{{$image->name}}</a></td>
                                    <td>{{$image->description}}</td>
                                    <td>{{$image->slug}}</td>
                                </tr>
                                <div class="modal fade" id="modal-{{$image->id}}" tabindex="-1" role="dialog" aria-labelledby="modal-{{$image->id}}Label" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <img src="https://i.imgur.com/{{$image->imgur_id}}.jpg" class="img-thumbnail">
                                    </div>
                                </div>
                            @endforeach
                            {{ $images->links() }}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script>
    $('input').click(function(){
      $.ajax({
        method: "PUT",
        url: "/api/images/"+$(this).prop('id'),
        data: {
          main: $(this).prop('checked') ? 1 : 0,
        }
      }).done(function(data){
        console.log(data);
      });
    });
</script>
@endsection
