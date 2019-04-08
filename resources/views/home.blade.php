@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">

            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            <table class="table table-sm table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Main</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody style="height: 100%;">
                    @foreach($images as $image)
                        <tr id="table-row-{{$image->id}}">
                            <td><a href="#modal-{{$image->id}}" data-toggle="modal" data-target="#modal-{{$image->id}}">{{$image->id}}</a></td>
                            <td><input type="checkbox" class="{{$image->id}}" @if($image->main) checked @endif ></td>
                            <td><input type="text" class="{{$image->id}}" name="name" value="{{$image->name}}"/></td>
                            <td><input type="text" class="{{$image->id}}" name="description" value="{{$image->description}}"/></td>
                        </tr>
                        <div class="modal fade" id="modal-{{$image->id}}" tabindex="-1" role="dialog" aria-labelledby="modal-{{$image->id}}Label" aria-hidden="true">
                            <div class="modal-dialog" role="document" style="top: 35%">
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
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script>
    $('input[type="checkbox"]').click(function(){
      $.ajax({
        method: "PUT",
        url: "/api/images/"+$(this).prop('class'),
        data: {
          main: $(this).prop('checked') ? 1 : 0,
        }
      }).done(function(data){
        console.log(data);
      });
    });

    let timeout = null;

    $('input[type="text"]').keyup(function(){
      clearTimeout(timeout);

      let id = $(this).prop('class');
      let key = $(this).prop('name');
      let value = $(this).val();
      let formData = {};
      if (key && key.length > 0) {
        formData[key] = value;
      }

      timeout = setTimeout(function () {
        $.ajax({
          method: "PUT",
          url: "/api/images/"+id,
          data: formData
        }).done(function(data){
          console.log(data);
        });
      }, 3000);
    });
</script>
@endsection
